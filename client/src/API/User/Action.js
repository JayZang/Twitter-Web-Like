import store from '@/store'
import axios from 'axios'


async function follow (userId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `/API/user/follow/${userId}`,
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

async function deleteFollow (userId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        method: 'DELETE',
        url: `/API/user/follow/${userId}`,
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
  follow,
  deleteFollow
}
