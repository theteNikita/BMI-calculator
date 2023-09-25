const form = document.querySelector('form')
 form.addEventListener('submit',function(e){ 
    e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const Result = document.querySelector('#Result');


if(height === "" || height < 0 || isNaN(height)){
  Result.innerHTML = `please give a vaild height ${height}`;
}

  else if(weight === "" || weight < 0 || isNaN(weight)){
  Result.innerHTML = `please give a vaild height ${weight}`;
}
  else{
   const BMI = (weight /((height*height)/10000).toFixed(2))
   Result.innerHTML = `<span>${BMI}</span>`
  }





 });