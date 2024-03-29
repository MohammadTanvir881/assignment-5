let seatCount = 0;
let selectedSeatPrice = 0;

// bus icon modification

document.getElementById('bus-icon').addEventListener('click', function(){
    alert('You Need To By Ticket First');
})

const seats = document.getElementsByClassName('seats');
for (const seat of seats) {
    seat.addEventListener('click', function add(event) {
        seatCount++;
        // console.log('clicked')
        if (seatCount > 4) {
            alert('You cannot select more than 4 seats')
            return;
        }
        // display ticket price
        const seatPrice = 550;
        const selectedSeatPrice = seatPrice * seatCount;
        const DisplayPrice = document.getElementById('display-price');
        DisplayPrice.innerText = selectedSeatPrice;


        // Grand Total part
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = selectedSeatPrice;

        // coupon input field

        const applyBtn = document.getElementById('apply-btn');
        applyBtn.addEventListener('click', function () {
            const inputField = document.getElementById('input-field');
            const inputText = inputField.value.split(' ').join('').toUpperCase();
            if (inputText === 'NEW15') {
                const discount = selectedSeatPrice * 0.15;
                const discountPrice = selectedSeatPrice - discount;
                grandTotal.innerText = discountPrice;

                // discount price
                document.getElementById('discount-price').innerText = discount;
                document.getElementById('discount-coupon').classList.remove('hidden');
                const couponDiv = document.getElementById('coupon-div');
                couponDiv.style.display = 'none';


            }

            else if (inputText === 'COUPLE20') {
                const discount = selectedSeatPrice * 0.2;
                const discountPrice = selectedSeatPrice - discount;
                grandTotal.innerText = discountPrice;

                document.getElementById('discount-price').innerText = discount;
                document.getElementById('discount-coupon').classList.remove('hidden');
                const couponDiv = document.getElementById('coupon-div');
                couponDiv.style.display = 'none';

            }
            else {
                return alert('Invalid Coupon Code');

            }


        })

        const phoneNumber = document.getElementById('phone-number');
        
        phoneNumber.addEventListener('keyup', function(event){
            const text = event.target.value;
            if(text.length > 8){
                const nextBtn = document.getElementById('next-btn')
                nextBtn.removeAttribute('disabled')
            }
        })
      

        if (seatCount > 0) {
            const nextBtn = document.getElementById('next-btn');
            nextBtn.addEventListener('click', function (){
    
                const headerContainer = document.getElementById('header-container');
                headerContainer.classList.add('hidden');
    
                const mainContainer = document.getElementById('main-container');
                mainContainer.classList.add('hidden');
    
                const footer = document.getElementById('footer');
                footer.classList.add('hidden')
    
                const mainContainer2 = document.getElementById('main-container2');
                mainContainer2.classList.remove('hidden')
    
            })
        }
       
       


        // seat name are displayed
        const selectContainer = document.getElementById('selected-seat');
        const p = document.createElement('p');
        p.innerText = seat.innerText;
        // console.log(p.innerText)
        selectContainer.appendChild(p)

        // class name are displayed 
        const classContainer = document.getElementById('selected-class');
        const h3 = document.createElement('h3');
        h3.innerText = 'Economy';
        classContainer.appendChild(h3)

        // price are displayed
        const priceContainer = document.getElementById('ticked-price');
        const h4 = document.createElement('h4');
        h4.innerText = 550;
        priceContainer.appendChild(h4)

        event.target.removeEventListener('click', add)


        let remainingSeats = document.getElementById('remaining-seats');
        const seatLeft = remainingSeats.innerText;
        const totalRemainingSeats = parseFloat(seatLeft) - 1;
        remainingSeats.innerText = totalRemainingSeats;

        seat.classList.add('bg-green-400')
        seat.classList.add('text-white')
        seat.classList.add('disabled')

        event.stopImmediatePropagation;
        const totalSeatSelected = document.getElementById('total-seat-select');
        totalSeatSelected.innerText = seatCount;

    })

  
}

// next button




// continue button 

const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click', function () {

    const headerContainer = document.getElementById('header-container');
    headerContainer.classList.remove('hidden');

    const mainContainer = document.getElementById('main-container');
    mainContainer.classList.remove('hidden');

    const footer = document.getElementById('footer');
    footer.classList.remove('hidden')

    const mainContainer2 = document.getElementById('main-container2');
    mainContainer2.classList.add('hidden')

    window.location.reload();
})





