// Create single data
function createSingleItem(data) {
  const {id, name, image, published_in, features} = data;

  const generateId = `item_${id}`;
  const div = document.createElement("div");
  div.className = "col-4";
  div.innerHTML = `<div class="card p-3">
  <img src="${image}" class="rounded" alt="${name}">
  <div class="card-body">
    <h4 class="card-title fw-bold">Features</h4>
    <ol class="list-group ms-3">
      <li>${features[0]}</li>
      <li>${features[1]}</li>
      <li>${features[2]}</li>
    </ol>
    <hr>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h4 class="card-title fw-bold">${name}</h4>
        <p><img src="./assets/icons/calendar.svg" alt="date"> <span>${published_in}</span></p>
      </div>

      <div>
        <!-- modal btn or clicker -->
        <button class="btn p-1 border border-danger rounded-circle" data-bs-toggle="modal"
          data-bs-target="#${generateId}">
          <img src="./assets/icons/eye-slash-fill.svg" width="28" alt="show modal eye slash fill icon">
        </button>
        <!-- Modal -->
        <div class="modal fade" id="${generateId}" tabindex="-1" aria-labelledby="${generateId}Label"
          aria-hidden="true">
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${generateId}Label">${name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>`;

  return div;
}
