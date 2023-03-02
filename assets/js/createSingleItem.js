// Create single data
function createSingleItem(data) {
  const div = document.createElement("div");
  div.className = "col-4";
  div.innerHTML = `<div class="card p-3">
  <img src="https://picsum.photos/id/62/1920/1080" class="rounded" alt="...">
  <div class="card-body">
    <h4 class="card-title fw-bold">Features</h4>
    <ol class="list-group ms-3">
      <li>paragraph-1</li>
      <li>paragraph-2</li>
      <li>paragraph-3</li>
    </ol>
    <hr>
    <div class="d-flex align-items-center justify-content-between">
      <div>
        <h4 class="card-title fw-bold">Features</h4>
        <p><img src="./assets/icons/calendar.svg" alt="date"> <span>11/01/2022</span></p>
      </div>

      <div>
        <!-- modal btn or clicker -->
        <button class="btn p-1 border border-danger rounded-circle" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          <img src="./assets/icons/eye-slash-fill.svg" width="28" alt="show modal eye slash fill icon">
        </button>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
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
