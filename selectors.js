const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here 
    const seededFruit = document.getElementsByClassName('seed');
    console.log(seededFruit);
    
    // 2. Get all seedless fruit elements
    const seedLessFruit = document.getElementsByClassName('seedless');
    console.log(seedLessFruit);
    // Your code here 


    // 3. Get first seedless fruit element
    // Your code here 
    console.log(seedLessFruit[0])

    /* Section 2 */
    // 4. Get inner span with text "you"
    const div = document.getElementById('wrapper').children[0];
    const span = div.children;
    
    console.log(span);
    console.log(span[0].innerText);
    
    // Your code here 

    // 5. Get all children of element "wrapper"
    // Your code here 
    const wrapperChildren = document.getElementById('wrapper').children;

    // 6. Get all odd number list items in the list
    // Your code here 

    console.log(document.getElementsByClassName('odd'));

    // 7. Get all even number list items in the list
    // Your code here 

    const listy = document.getElementById('two').children[2].children;

    console.log(listy[1].innerText);
    console.log(listy[3].innerText);


    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here 

    const noclass = document.getElementById('three').getElementsByTagName('a');
    console.log(noclass[0]);

    // 9. Get "Amazon" list element
    // Your code here 

    console.log(noclass[2]);


    // 10. Get all unicorn list elements (not the image element)
    // Your code here 

    const unicorns = document.getElementById('three').children[3];
    console.log(unicorns.children);


}

window.onload = select;