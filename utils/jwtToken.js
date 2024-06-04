const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  const expireTimeInDays = 7; 
  const expireTimeInMilliseconds = expireTimeInDays * 24 * 60 * 60 * 1000;

  const options = {
    maxAge: expireTimeInMilliseconds, 
    httpOnly: true, 
  };

 
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
