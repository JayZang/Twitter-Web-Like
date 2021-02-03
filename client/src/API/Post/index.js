import store from '@/store';
import axios from 'axios';


async function SendPost (request) {
  let res;

  try {
    res = await axios({
      method: 'POST',
      url: `/API/post/`,
      data: request,
      headers: {
        'x-auth': store.getters.authToken
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

async function ToggleLike (postId) {
  let res;

  try {
    res = await axios({
      method: 'GET',
      url: `/API/post/${postId}/like`,
      headers: {
        'x-auth': store.getters.authToken
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

async function GetDetailPostInfo (postId) {
  let res;

  try {
    res = await axios({
      method: 'GET',
      url: `/API/post/${postId}`,
      headers: {
        'x-auth': store.getters.authToken
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
  SendPost,
  ToggleLike,
  GetDetailPostInfo
}
