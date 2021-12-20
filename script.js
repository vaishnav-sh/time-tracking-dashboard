var obj = [];
fetch('./data.json')
   .then(response => {
      return response.json()
   })
   .then(data => obj = data)

   console.log(obj)


