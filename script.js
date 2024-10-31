let adviceCount = 0;


document.querySelector('.random').addEventListener('click', async () =>{
   
    const url = 'https://api.adviceslip.com/advice';

    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const quote = await response.json();

        document.getElementsByClassName('quote')[0].textContent = `"${quote.slip.advice}"`;

        adviceCount++; 
        document.getElementById('advice-number').textContent = adviceCount;
       
    }catch (error){
        document.getElementsByClassName('quote')[0].textContent = `Error fetching data: "${error.message}"`;
    }
});