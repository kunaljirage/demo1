import { useUserContext } from "./userContext";

const getUserData = () =>{
  const {setUser } = useUserContext();


 const getUser = () => {
  let token= document.cookie;
  token=token.split("=");
  if(token[1]){
     fetch(`/api/v1/user/show`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json',
          'Authorization':token[1]
        },
      })
        .then(response => response.json())
        .then(data =>{
          if(data.message === 'successful')
          {
            setUser(data.user)
          }
          else{
            alert('please login first')
          }

           })

          }
  }
  return [getUser];
  }
export default getUserData;

