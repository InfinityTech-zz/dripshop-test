export async function fetchTasks(){
   const baseUrl = 'http://localhost:4000/';
   try {
    let data = await fetch(baseUrl);
    data = data.json();
    console.log('data', data);
    return data;
   } catch(e) {
      console.error(e);
   }
   
}

export async function createTask(jsonData){
    console.log('jsonData', jsonData);
    const baseUrl = 'http://localhost:4000/';
    try {
        let data = await fetch(baseUrl + 'create', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(jsonData)
        });
        data = data.json();
        console.log('data', data);
        return data;
    } catch(e) {
        console.error(e);
    } 
    
 }