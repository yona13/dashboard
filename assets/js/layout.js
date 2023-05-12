/* Variables */
const b = document.body;
const container = document.querySelector(".content");
const footer = document.querySelector(".footer");
const scales = [1, 2];
let scaleToggle = true;

/* Resize if needed */
if (b.clientHeight > (scales[scaleToggle ? 0 : 1] * b.clientWidth)) {
    scaleToggle = false;
}
resize();

/* Add Resize Event Listner to Window */
window.addEventListener('resize', (event) => {
    if (b.clientHeight > (scales[scaleToggle ? 0 : 1] * b.clientWidth))
        scaleToggle = false;
    else
        scaleToggle = true;

    resize();
});

/**
 * Resize Function
 * 
 * Resizes elements in markup to fit window
 */
function resize() {
    if (scaleToggle) {
        container.className = "content";
        footer.className = "footer";
    } else {
        container.className = "content-tall";
        footer.className = "footer-tall"
    }
}

const list = document.querySelector(".todo-list");
const button = document.querySelector(".todo");
let currentId = 0;
button.addEventListener("click", (event) => {
    const item = window.prompt("New To Do Item:");
    if (item != null) {
        const newLabel = document.createElement("label");
        newLabel.htmlFor = "todo-" + currentId;
        newLabel.textContent = item;
        const newInput = document.createElement("input");
        newInput.type = "checkbox";
        newInput.name = "todo-" + currentId;
        currentId++;
        const newItem = document.createElement("li");
        newItem.appendChild(newInput);
        newItem.appendChild(newLabel);
        list.appendChild(newItem)
    }
});

const projects = document.querySelector(".projects");
const stats = document.querySelector(".statistics");
const bulletins = document.querySelector(".announcements");
const ipsums = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus vehicula turpis, at fringilla eros mollis vitae. Suspendisse malesuada tellus feugiat laoreet ullamcorper. Mauris at eros id nibh facilisis tempus sed at augue. Suspendisse eu ante magna. Sed vel convallis neque. Nunc quis tortor tortor.",
    "Curabitur vitae metus rhoncus, lacinia lectus a, blandit libero. Mauris erat nisl, suscipit ut efficitur ac, feugiat in ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eu aliquam ex, ut feugiat eros. Nulla ligula lacus, venenatis sed magna quis, ullamcorper blandit turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis vitae turpis maximus, rutrum metus a, mollis lectus. Quisque pretium nulla egestas congue finibus.",
    "Ut dictum hendrerit nisi sit amet malesuada. Mauris faucibus ante nec metus elementum, sed fermentum neque eleifend. Fusce sit amet massa blandit, blandit magna sed, facilisis eros. Proin feugiat leo quis leo viverra consequat. Proin dignissim accumsan odio ut facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ullamcorper, lorem eu rhoncus tristique, odio mi vulputate ligula, a tempus odio lacus sed nulla. In ultricies porttitor massa.",
    "Fusce ac sapien faucibus, pulvinar felis sed, ornare ipsum. Fusce ultricies, nunc sed eleifend faucibus, sapien dolor fermentum sem, eget convallis neque mauris tempor mauris. Cras id tortor sed nunc placerat tincidunt vel eget magna. Donec ligula leo, sodales at mi at, fermentum tempus turpis. Morbi id molestie felis. Vestibulum et finibus dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    "Pellentesque quis enim sed elit tincidunt aliquam vel non metus. Phasellus posuere est massa, ut pulvinar lectus congue in. Vestibulum eget nulla mi. Pellentesque sed suscipit lorem. Donec elementum elit ac tortor egestas sodales. Nulla a nisi ac orci aliquam hendrerit. Duis vel malesuada velit, suscipit tincidunt leo. Morbi vehicula faucibus mauris, at consectetur dui lacinia vel.",
    "Donec luctus lacus sed quam blandit ultricies. Quisque orci erat, tincidunt et turpis eget, posuere blandit mauris. Quisque maximus libero eget massa rhoncus, ac mattis magna ultricies. Nulla facilisi. Etiam sodales viverra velit, id rutrum diam porttitor malesuada. Aliquam vulputate, tortor ut suscipit maximus, diam lectus hendrerit mauris, vitae auctor metus dolor sed ante.",
    "Pellentesque feugiat tincidunt purus at suscipit. Etiam consequat purus ac orci faucibus convallis. Proin id neque sem. Duis interdum ante id sem laoreet scelerisque. Nulla vel dignissim ligula, id iaculis diam. Phasellus orci sapien, eleifend id tellus non, iaculis fermentum sem. Donec vitae ligula metus.",
    "Nunc dignissim metus sit amet tellus sagittis, in egestas dui imperdiet. Sed nec lorem eu risus aliquam euismod. Morbi ullamcorper leo vel metus scelerisque, non tincidunt nunc scelerisque. In tincidunt egestas orci, lobortis laoreet tellus semper sit amet. Quisque quis imperdiet ex, eget molestie diam. Fusce ac pharetra lacus. Donec hendrerit augue odio, in scelerisque diam tempus vel. Donec efficitur velit nec dolor laoreet, ac molestie tortor accumsan.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas id magna a aliquam. Aliquam malesuada augue vel sodales fermentum. Sed vitae nunc dictum lectus vehicula consectetur sit amet nec ex. Praesent molestie vehicula velit accumsan placerat. Donec pharetra euismod neque, ut ullamcorper mi finibus a. Praesent eget tortor molestie, maximus enim sed, accumsan tortor. Nunc tempus leo vel tincidunt posuere.",
    "Praesent ut risus sed sem laoreet sagittis. Suspendisse molestie sapien sit amet mi dapibus porta. Aenean dapibus lacus ut odio interdum tincidunt. Morbi mattis, turpis non congue volutpat, arcu risus egestas ipsum, venenatis venenatis enim justo quis est. Donec porta tortor iaculis nulla lacinia imperdiet. Proin fermentum odio at imperdiet tincidunt. In vehicula accumsan orci vel ultrices. Duis dolor felis, pretium nec ultrices vitae, porta vel nisi. Sed venenatis sem dolor, a semper eros posuere sed. Vivamus et rutrum nibh.",
    "Sed mollis lectus dolor, id convallis enim vehicula vel. Proin fringilla tincidunt efficitur. In vitae tortor sed purus mattis mattis. Integer nec libero enim. Duis luctus luctus lectus vel vestibulum. Nam maximus cursus ex, at ullamcorper nisi. Etiam eu volutpat nibh, quis egestas odio. Sed at lobortis elit. Nam consectetur elit nisi, et tempus lorem pellentesque sed.",
    "Aliquam aliquet lorem nisl, non lacinia urna sodales ut. Donec ultricies sapien vel consequat sagittis. Nam rhoncus nisi id ligula condimentum, et luctus massa volutpat. Vestibulum et mi eget velit accumsan euismod. Vivamus non libero turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc odio velit, vehicula id dignissim at, volutpat eu metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean porttitor est vehicula efficitur luctus.",
    "Etiam a lectus varius, ullamcorper est sit amet, faucibus leo. Nullam maximus magna sit amet placerat pharetra. Curabitur nec sagittis odio, non viverra libero. Pellentesque pretium eros non dignissim tincidunt. Vivamus metus leo, malesuada faucibus neque pulvinar, rutrum consequat diam.",
    "Vestibulum nulla ipsum, tincidunt eu enim quis, imperdiet pulvinar sapien. Praesent iaculis hendrerit leo, quis pretium neque venenatis quis. Fusce tempus vehicula ornare. Fusce a lacinia mi. Pellentesque dignissim feugiat tristique. Etiam dictum interdum dolor, sed finibus ipsum scelerisque ut. Aenean felis sapien, varius a ante eu, viverra auctor velit. In hac habitasse platea dictumst. Ut et sem id nulla viverra dapibus eu eget lectus. Praesent ligula orci, pretium quis vehicula sed, tempus euismod nulla. Phasellus id tempus arcu.",
    "Pellentesque viverra magna vel urna vehicula, eu accumsan mi maximus. Proin vel sem eget ipsum sodales dapibus a eget eros. Suspendisse at eleifend erat, ac tincidunt nulla. Vestibulum in massa vel orci faucibus fermentum. Morbi accumsan urna nibh, et ornare odio tincidunt in. Donec nisi tellus, porttitor at egestas nec, laoreet sed leo. Vivamus egestas tortor vitae erat ullamcorper, et pretium enim lacinia.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus quis bibendum eros. Morbi congue nisl sit amet odio fringilla, eget faucibus nibh ullamcorper. Ut lacinia pretium purus non euismod. Vestibulum elementum sapien justo, at consequat lacus tincidunt id. Nunc at imperdiet massa, nec iaculis lorem. Sed vestibulum orci sit amet rutrum lacinia.",
    "Sed a mi a urna bibendum imperdiet tincidunt eget odio. Donec purus tellus, sagittis at urna et, dignissim congue dui. Donec a tortor diam. Mauris mollis nec velit ac vestibulum. Nullam lobortis justo fringilla mattis convallis. Mauris euismod ligula vitae lectus viverra, dignissim fringilla justo sagittis. Sed ornare venenatis egestas. Morbi tempus dignissim nisi, at ultrices libero elementum et. Nulla et interdum purus, eu tristique diam. Nullam luctus ligula est, eget tempus felis auctor at. Vivamus non fermentum quam.",
    "Phasellus mollis quam luctus est sodales, vitae blandit metus pulvinar. Morbi varius rhoncus felis a imperdiet. Sed ac purus rhoncus, porttitor sem vel, fermentum lectus. Aliquam mattis orci sit amet ullamcorper fringilla. Suspendisse neque diam, viverra vitae urna nec, malesuada blandit nisi. Integer ut purus vitae felis vehicula luctus ut non leo. Proin maximus vehicula magna, ac hendrerit turpis ultricies sed.",
    "Phasellus ultrices tortor libero, vitae sollicitudin velit sollicitudin a. Mauris vulputate posuere rutrum. Sed mollis dui et tempor finibus. Nunc venenatis orci et libero vestibulum, ac ultrices quam iaculis. Aliquam congue sagittis sem et vestibulum. Phasellus vel blandit diam. Curabitur nisl risus, feugiat vitae felis ut, sollicitudin condimentum magna. Aliquam maximus tristique orci, non tristique nibh. Vestibulum vitae eleifend enim, id dictum ipsum.",
    "Ut pretium nisi sit amet lacus dignissim, sed bibendum massa ultricies. Donec ornare at justo eu rhoncus. Nullam neque nisl, aliquet rutrum nunc eget, condimentum convallis ex. Praesent non ante in purus laoreet tempus. Vivamus felis tortor, pretium vitae aliquam non, aliquet et turpis. Morbi eu massa ac elit volutpat cursus non quis risus. Cras venenatis elementum nulla eget pharetra. Vivamus sit amet quam libero. Integer non dui id purus pellentesque dapibus vel ac velit. Nullam quis ex a dolor pulvinar porttitor nec a tellus."
]

for (var i = 1; i <= 4; i++) {
    const name = `Project ${i}`;
    const newDiv = document.createElement("div");
    const newTitle = document.createElement("h1");
    const newParagraph = document.createElement("p");
    newTitle.textContent = name;
    newParagraph.textContent = ipsums[i - 1];
    newDiv.appendChild(newTitle);
    newDiv.appendChild(newParagraph)
    newDiv.className = `project-${i} bubble`;
    projects.appendChild(newDiv);

    const newBulletinDiv = document.createElement("div");
    const newBulletin = document.createElement("p");
    newBulletin.textContent = ipsums[ipsums.length - i];
    newBulletinDiv.appendChild(newBulletin);
    newBulletinDiv.className = `bulletin-${i} bubble`;
    bulletins.appendChild(newBulletinDiv);

    const id = `pie-${i}`;
    const newCanvasDiv = document.createElement("div");
    newCanvasDiv.className = `statistics-${i} bubble`;
    const newCanvas = document.createElement("canvas");
    newCanvas.id = id;
    newCanvas.style = "width: 50; height: 50";
    const newPie = pie();
    newCanvasDiv.appendChild(newCanvas);
    stats.append(newCanvasDiv);
    new Chart(id, {
        type: "pie",
        data: {
            datasets: [{
                backgroundColor: pieDecoration(newPie.length),
                data: newPie
            }]
        }, options: {
            title: {
                display: true,
                color: "#e0e0e0",
                text: name
            },
            tooltips: {enabled: false},
            hover: {mode: null}
        }
    });
}

const addRemoveHolder = document.querySelector("#button-holder-1");
const confirmCancelHolder = document.querySelector("#button-holder-2");
confirmCancelHolder.setAttribute("style", "visibility: hidden");
const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".remove");
const confirmButton = document.querySelector(".confirm");
const cancelButton = document.querySelector(".cancel");