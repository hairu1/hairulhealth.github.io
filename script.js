function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let tips = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        tips = `It's important to maintain a healthy weight for your overall well-being. You may want to consider increasing your calorie intake with nutrient-rich foods, such as whole grains, lean proteins, healthy fats, and fruits and vegetables. Adding strength training to your exercise routine can also help build muscle mass.`;
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        tips = `Great job! You’re within the normal weight range. To maintain your healthy BMI, continue eating a balanced diet and engage in regular physical activity. Keep up the good work by staying active, hydrated, and mindful of your overall wellness.`;
    } else if (bmi < 29.9) {
        category = 'Overweight';
        tips = `You might benefit from some changes in your diet and activity levels. Consider reducing your intake of processed foods and sugary beverages, while focusing on more whole foods like fruits, vegetables, and lean proteins. Incorporating more physical activity into your daily routine, such as walking, running, or cycling, can help you manage your weight.`;
    } else {
        category = 'Obesity';
        tips = `Managing your weight can improve your overall health. It may be helpful to consult with a healthcare provider or nutritionist to create a tailored plan. Focus on gradual, sustainable weight loss by eating a balanced diet with fewer high-calorie foods and more fruits, vegetables, and whole grains. Regular exercise and support from friends or family can help you on your journey to better health.`;
    }

    document.getElementById('result').innerText = `Your BMI is ${bmi} (${category})`;

    document.getElementById('tips').innerText = tips;

    document.getElementById('encouragement').innerText = `Remember, a healthy lifestyle is a journey, not a destination. Take it step by step, and celebrate your progress along the way! You got this!`;
}



   

