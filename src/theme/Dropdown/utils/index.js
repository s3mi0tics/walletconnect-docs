const SELECTED_ENV_KEY = "SELECTED_ENV_KIT"

export function setItemInStorage(item){
  localStorage.setItem(SELECTED_ENV_KEY, item)
}

export function removeItemInStorage(){
  localStorage.removeItem(SELECTED_ENV_KEY)
}

export function getItemInStorage(){
  return localStorage.getItem(SELECTED_ENV_KEY)
}

export function parseEnvironment(env){
  if(!env) return ''
  if(env.includes('-')){
    const env_array = env.split('-')
    return env_array.map(item => {
      if(item === 'ios'){
        return 'iOS'
      }
      return capitalize(item)
    }).join(' ')
  }
  if(env === 'ios'){
    return 'iOS'
  }
  return capitalize(env)
}

function capitalize(item){
  return item.charAt(0).toUpperCase() + item.slice(1)
}