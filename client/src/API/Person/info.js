import store from '@/store'
import axios from 'axios'

async function GetPersonBasicInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `/API/person/${personId}`,
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

async function GetPersonFollowingInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `/API/person/${personId}/following`,
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

async function GetPersonFollowerInfo (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
        methods: 'get',
        url: `/API/person/${personId}/follower`,
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

async function GetPersonPosts (personId) {
  let res
  let token = store.getters.authToken

  try {
    res = await axios({
      method: 'GET',
      url: `/API/person/${personId}/posts`,
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
  GetPersonBasicInfo,
  GetPersonFollowingInfo,
  GetPersonFollowerInfo,
  GetPersonPosts
}
