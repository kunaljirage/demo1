

const deleteProperty = getUserPropertyData => {

  const deletePropertyData =async(id)=>{
    let token= document.cookie;
    token=token.split("=");
    if(id){

      const response= await fetch(`/api/v1/property/delete/${id}`, {
        method: "GET",
        headers: {
        Accept: "application/json",
        'Content-Type':'application/json',
        'Authorization':token[1]
        },
      })

        response.json().then(data => {
          if(data)
          {
          getUserPropertyData();
          }
        });

      }

    }

  return [deletePropertyData];
  }

export default deleteProperty

