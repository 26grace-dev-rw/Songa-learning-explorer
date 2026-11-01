// Task1: create learning resources.
const resources= [
    {
        id:  1,
        title: "JavaScript Variables and Data Types",
        category: "JavaScript",
        description: "Learn how to declare variables and work with common JavaScript data types.",
        completed: false
    },
    {
        id: 2,
        title: "JavaScript Arrays and Objects",
        category: "JavaScript",
        description: "Practise storing, organizing, and accessing information with arrays and objects.",
        completed: false
    },
    {
        id: 3,
        title: "CSS Styling Basics",
        category: "CSS",
        description: "Learn selectors, colors, spacing, and other basics for styling a webpage.",
        completed: false
    },
    {
        id: 4,
        title: "Responsive CSS Layouts",
        category: "CSS",
        description: "Learn how to make webpages work on diferent screen sizes.",
        completed: false
    },
    {
        id: 5,
        title: "Git and GitHub Basics",
        category: "Git and GitHub",
        description: "Learn how to track changes and publish  project on GitHub",
        completed: false
    },
    {
        id: 6,
        title: "Writing a Professional CV",
        category: "Career Skills",
        description: "Learn how to preparea clear and professional CV.",
        completed: false
    },
        
    {
        id: 7,
        title: "Preparing for an Interview",
        category: "Career Skills",
        description: "Learn how to prepare for career interviews.",
        completed: false
    },
];
// SELECT ELEMENTS FROM THE DOM
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const resourceList = document.getElementById("resource-list");
const resourceCount = document.getElementById("resource-count");
const completedCount = document.getElementById("completed-count")
const emptyMessage = document.getElementById("empty-message");
// TASK 2: DISPLAY RESOURCES ON THE WEBPAGE
function displayResources() {
    const filteredResources = getFilteredResources();
    resourceList.innerHTML = "";
    for (let i = 0; i < filteredResources.length; i++) {
        const resource = filteredResources[i];
        const card = document.createElement("div"); card.className = "resource-crd";
        const title = document.createElement("h3"); title.textContent = resource.title;
        const category = document.createElement("p"); category.className = "resource-category"; category.textContent = resource.category;
        const description = document.createElement("p"); description.className = "resource.description", description.textContent = resource.description;
        const status = document.createElement("p"); status.className = resource.completed ? "completion-status completed" : "completion-status incomplete"; status.textContent = resource.completed ? "Status: completed" : "Status: Incomplete";
        const button = document.createElement("button"); button.type = "button"; button.dataset.resourceId = resource.id; button.textContent = resource.completed ? "Mark as Incomplete" : "Mark as Completed";
        card.appendChild(description);
            card.appendChild(status);
            card.appendChild(button);
        resourceList.appendChild(card);
    }
// task 6: DISPLAY THE NUMBER OF MATCHING RESOURCES
resourceCount.textContent = "Resource: " + filteredResources.length;
//Count completed resources across the entire array.
const completedResources = resources.filter(function (resource) { return resource.completed;});
completedCount.textContent ="Completed: " + completedResources.length;
// show the message when no resources match.
emptyMessage.hidden = filteredResources.length !== 0;
}
// TASK 3 AND TASK 4: SEARCH AND CATEGORY FILTERING
function getFilteredResources() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value; return resources.filter(function(resource){
        const matchesSearch = resource.title.toLowerCase().includes(searchText) || resource.description.toLowerCase().include(searchText);
        const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory; return matchesSearch && matchesCategory;
    });
}
// TASK 3: MAKE THE SEARCH WORK
searchInput.addEventListener("input", function () { displayResources();
});
// TASK 4: MAKE THE CATEGORY FILTER WORK
categoryFilter.addEventListener("change", function () { displayResources();
});
// TASK 5; MARK RESOURCES AS COMPLETED
// Use EVENT DELEGATION.
resourceList.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-resource-id]");
    if (!button || ! resourceList.contains(button)) { return;
    }
    const resourceId = Number(button.dataset.resourceId);
    const selectedResource = resources.find(function(resource) {resource.id === resourceId;
    });
    if (selectedResource) {selectedResource.completed= !selectedResource.completed; displayResources();}
});
// DISPLAY RESOURCES WHEN THE PAGE LOADS
window.addEventListener("DOMContentLoaded", function () { displayResources();});


