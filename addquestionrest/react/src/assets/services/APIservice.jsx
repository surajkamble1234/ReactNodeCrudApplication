import axios  from "axios";

class APIservice
{
  saveQuestions(saveQ)
  {
    
   return axios.post("http://localhost:4000/saveq",saveQ);
  }

  showQuestions()
  {
    return axios.get("http://localhost:4000/showque");
  }

  delQuestions(aid)
  {
    return axios.get(`http://localhost:4000/deleteq?qid=${aid}`)
  }

  // updateQuestion(aid)
  // {
  //   return axios.get(`http://localhost:4000/updateq?qid=${aid}`);
  // }

  updatequedata(aid)
  {
   return axios.get(`http://localhost:4000/updatedata?qid=${aid}`);
  }

  saveupdateques(saveQ)
  {
    return axios.post("http://localhost:4000/updatequesdata",saveQ);
  }
}
export default new APIservice();