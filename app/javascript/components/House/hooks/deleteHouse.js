

const deleteHouse = getUserHouseData => {

  const deleteHouseData =async(id)=>{
    let token= document.cookie;
    token=token.split("=");
    if(id){

      const response= await fetch(`/api/v1/house/delete/${id}`, {
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
          getUserHouseData();
          }
        });

      }

    }

  return [deleteHouseData];
  }

export default deleteHouse

