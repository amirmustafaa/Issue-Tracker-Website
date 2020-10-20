const router = require("express").Router();
const mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
const User = require("../models/userModel");
const Project = require("../models/projectModel");
const Issue = require("../models/issueModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const session = require("express-session");



router.post("/register", async (req, res) =>{
  try{
    let {email, password, passwordCheck, username} = req.body;
    //validate

    if(!email || !password || !passwordCheck)
      return res.status(400).json({msg:"Not all feilds have been entered."});

    if(password.length <5)
      return res.status(400).json({msg:"Password needs to be atleast 5 characters long."});

    if(password !== passwordCheck)
      return res.status(400).json({msg:"Enter the same password twice for verification."});

    const existingUser = await User.findOne({email:email})
    if(existingUser)
      return res.status(400).json({msg:"An account with this email already exists."});

    if(!username)
      username = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password,salt);

    const newUser = new User({
      email,
      password: passwordHash,
      username,
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
    }catch(err){
      res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
  try{
    const {email, password} = req.body;

    //validate
    if(!email || !password)
      return res.status(400).json({msg:"Not all feilds have been entered."});

    const user = await User.findOne({email: email}).populate('project');
    if(!user)
      return res.status(400).json({msg:"No account with this user exists."});


    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch)
      return res.status(400).json({msg:"Invalid Credentials."});

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({
      token,
      user:{
        id: user._id,
        username: user.username,
        email: user.email,
        project: user.project
      }
    });
  }catch(err){
    res.status(500).json(err.message);
  }

});

router.delete("/delete", auth, async(req,res)=>{
  try{
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);

  }catch(err){
    res.status(500).json(err.message);
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



router.post("/createProject", async(req,res) => {
  try{
    const {name, description, code, admin, user_id} = req.body; //code, admin,

    const salt = await bcrypt.genSalt();
    const codeHash = await bcrypt.hash(code,salt);

    const newProject = new Project({
      name,
      description,
      code:codeHash,
      admin
    });

    const user = await User.findById(user_id);

    newProject.users =user;

    const savedProject = await newProject.save();
    user.project.push(newProject)
    await user.save();
    res.json(savedProject);

  }catch(err){
    res.status(500).json(err.message);
  }

})

router.post("/addProject", async(req,res) => {
  try{
    const {projectName, code, user_id} = req.body;


    const project = await Project.findOne({name:projectName})

    const user = await User.findById(user_id);

    const isMatch = await bcrypt.compare(code, project.code);
    if(isMatch){
      project.users.push(user);

      await project.save();

      user.project.push(project)

      await user.save();
      res.json("Okay");

    }

  }catch(err){
    res.status(500).json(err.message);
  }

})




router.post("/createIssue", async(req,res) => {
  try{
    const {name, description, severity, status, date, assigned, project_id} = req.body;

    const newIssue = new Issue({
      name,
      description,
      severity,
      status,
      date,
      assigned
    });

    const project = await Project.findById(project_id);

    const savedIssue = await newIssue.save();
    project.issues.push(newIssue);
    await project.save();
    res.json(savedIssue);

  }catch(err){
    res.status(500).json(err.message);
  }

})

router.post("/userProjects",  async(req, res)=>{
  try{
    let {project_id} = req.body;
    const project = await Project.findById(project_id).populate('issues');
    res.json({
        name:project.name,
        description:project.description,
        issues: project.issues
    })
  }catch(err){
  res.status(500).json(err.message);
}
});

router.post("/ticketInformation",  async(req, res)=>{
  try{
    let {ticket_id} = req.body;

    const ticket = await Issue.findById(ticket_id)

    res.json({
      name:ticket.name,
      description:ticket.description,
      severity:ticket.severity,
      status:ticket.status,
      date:ticket.date,
      assigned:ticket.assigned
    });

  }catch(err){
  res.status(500).json(err.message);
}
});

router.post("/updateTicket",  async(req, res)=>{
  try{


  }catch(err){
  res.status(500).json(err.message);
}
});

router.get("/", auth, async (req, res) =>{
  const user = await User.findById(req.user).populate('project');
  res.json({
    username: user.username,
    id: user._id,
    project:user.project
  });
});




module.exports = router;
