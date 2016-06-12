


getRequests={
  '/': getHomePage,
  '/goalslist': getGoalsList,
}





module.exports ={
  get: getRequests,
  post: postRequests,
  delete: deleteRequests,
  put: putRequests
};


