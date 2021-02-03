import store from '@/store';
import axios from 'axios';


async function SendCommentToPost (postId, request) {
  let res;
  let token = store.getters.authToken

  try {
    res = await axios({
      method: 'POST',
      url: `/API/comment/post/${postId}`,
      data: request,
      headers: {
        'x-auth': token
      }
    })
  } catch (e) {
    return {
      result: false,
      errMsg: 'Unable to connect to server'
    }
  }

  return res.data
}

export default {
  SendCommentToPost
}
