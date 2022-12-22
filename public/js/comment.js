console.log(`/api/blogposts/${blogPost.id}`)
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#comment-content').value.trim();
  
    if (content) {
      console.log(`/api/blogposts/${id}`)
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'POST',
        body: JSON.stringify({ content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/blogposts/${id}`);
      } else {
        alert('Failed to create comment');
      }
    }
};
  
// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/blogposts/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete blog post');
//       }
//     }
// };
  
document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
// document
//     .querySelector('.blog-post-list')
    // .addEventListener('click', delButtonHandler);
  