const roleMiddleware = (allowRoles) => (req,res,next) =>{
    const userRole = req.user.role;
    if(!allowRoles.includes(userRole)){
        return res.status(403).json({message: "Access denied"})
    }
    next()
}

module.exports = roleMiddleware