export async function fetchTasks(){
   const baseUrl = 'http://localhost:4000/';
   let data = await fetch(baseUrl);
   data = data.json();
   console.log('data', data);
   return data;
}

export async function createTask(jsonData){
    const baseUrl = 'http://localhost:4000/';
    let data = await fetch(baseUrl + 'create', {
        method: "POST",
        bosy: JSON.stringify(jsonData)
    });
    data = data.json();
    console.log('data', data);
    return data;
 }