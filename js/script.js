function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var people = document.getElementById('people').value;

  if (name === "" || email === "" || phone === "" || date === "" || time === "" || people === "") {
      // Hiển thị thông báo lỗi
      alert('Booking Falied!');
      
      // Thêm nội dung vào các phần tử span
      displayError('nameError', 'Please enter your name.');
      displayError('emailError', 'Please enter your email.');
      displayError('phoneError', 'Please enter your phone number.');
      displayError('dateError', 'Please enter the date.');
      displayError('timeError', 'Please enter the time.');
      displayError('peopleError', 'Please enter the number of people.');

      return false;
  }
  else{
      alert("Booking Successfully");
  }
  return true;
}

function displayError(id, message) {
  var errorElement = document.getElementById(id);
  errorElement.textContent = message;
}