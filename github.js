// id a secret bys normalne nemel mit takhle verejne, u tohoto pripadu je to jedno muzes to generovat
class GitHub {
  constructor(){
    this.client_id = '5d6bc13ae7c5be398676';
    this.client_secret = '9389a8d58b4722287c55f641d2e97f18414c393a';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}