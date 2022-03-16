

const deleteProperty = getUserPropertyData => {

  const deletePropertyData =async(id)=>{
    if(id){

      const response= await fetch(`/api/v1/property/delete/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          'Content-Type':'application/json'
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

