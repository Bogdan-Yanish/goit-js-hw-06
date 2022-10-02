const listCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${listCategories.length}`);
console.log(' ');

listCategories.forEach(category => {
    const list = [...category.children];
    list.forEach(item => {
        if (item.tagName === 'H2') {
            console.log(`Category: ${item.textContent}`);
        }
    });

    list.forEach(item => {
        if (item.tagName === 'UL') {
            console.log(`Elements: ${item.children.length}`);
        }
    });
    console.log(' ');
});




