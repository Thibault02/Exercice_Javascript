function showFormData(event) {
    event.preventDefault();
    let title = event.target.title.value;
    let content = event.target.content.value;
    let category = event.target.category.value;
    alert(`Title: ${title}\n Content: ${content}\n Category: ${category}`);
}
