const main = () => {
    const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

    const getMeal = () => {
        fetch(`${baseUrl}/categories.php`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllMeals(responseJson.categories);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });

    }

    const renderAllMeals = (categories) => {
        const listMealElement = document.querySelector('#items');
        listMealElement.innerHTML = '';

        categories.forEach(category => {
            const descMeal = category.strCategoryDescription.slice(0, 80)+'...'; 
            listMealElement.innerHTML += `
            <div class="card shadow p-3 mb-5 bg-body rounded m-3" style="width: 18rem;">
                <img src="${category.strCategoryThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title">${category.strCategory}</h5>
                        <a href="#" class="btn btn-primary">${category.idCategory}</a>
                    </div>
                    <p class="card-text">${descMeal}</p>
                </div>
            </div>
            `;
        });
    };

    const showResponseMessage = (message = 'check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        getMeal();
    });

};

export default main;