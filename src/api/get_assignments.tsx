import axios, { AxiosRequestConfig } from "axios";

import { transformAssignments } from "../types/Assignments";

export const fetchAssignments = async () => {

  var config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://cisc322-website.herokuapp.com/api/assignments',
    params: {
      populate: '*'
    }
  };

  const response = await axios.request(config)

  if (!response) {
    console.error('response was null!')
    return
  }

  return transformAssignments(response);
};
