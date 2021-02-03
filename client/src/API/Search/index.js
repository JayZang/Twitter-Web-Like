import store from '@/store'
import axios from 'axios'


async function searchUsers(queryTxt) {
  let token = store.getters.authToken
  let res

  try {
    res = await axios({
      method: 'GET',
      url: `/API/search/person/${queryTxt}`,
      headers: {
        'x-auth': token
      }
    })

    return res.data
  } catch (e) {
    return {
      result: false,
      errMsg: 'Unable to connect to server'
    }
  }
}

export default {
  searchUsers
}
