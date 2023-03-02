// Create single data
function createSingleItem(data) {
  const {id, name, image, published_in, features} = data;

  const generateId = `item_${id}`;
  const modalId = `modal_${id}`;

  const div = document.createElement("div");
  div.className = "col-md-6 col-xl-4";
  div.id = generateId;
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

      <div class="show_details">
        <!-- modal btn or clicker -->
        <button class="btn p-1 border border-danger rounded-circle" data-bs-toggle="modal"
          data-bs-target="#${modalId}">
          <img src="./assets/icons/eye-slash-fill.svg" width="28" alt="show modal eye slash fill icon">
        </button>
      </div>

    </div>
  </div>
</div>`;

  return div;
}

function modal(data) {
  const {id} = data;
  const modalId = `modal_${id}`;

  const div = document.createElement("div");
  div.innerHTML = `
  <!-- Modal -->
  <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="${modalId}Label">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="card border-danger">
                  <div class="card-body">
                    <h4>ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human
                      conversation.</h4>
                    <div class="row gx-2">
                      <div class="col-4">
                        <p class=" bg-secondary-subtle">$10/month
                          Basic</p>
                      </div>
                      <div class="col-4">
                        <p class=" bg-secondary-subtle">$10/month
                          Basic</p>
                      </div>
                      <div class="col-4">
                        <p class=" bg-secondary-subtle">$10/month
                          Basic</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-6">
                        <h3>Features</h3>
                        <ul>
                          <li>Customizable responses</li>
                          <li>Customizable responses</li>
                          <li>Customizable responses</li>
                        </ul>
                      </div>
                      <div class="col-6">
                        <h3>Integrations</h3>
                        <ul>
                          <li>FB Messenger</li>
                          <li>FB Messenger</li>
                          <li>FB Messenger</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card  position-relative">
                  <span class="position-absolute top-0 end-0  badge rounded-pill bg-danger fs-5 m-2">
                    94% accuracy
                  </span>

                  <img src="https://picsum.photos/id/11/1920/1080" class="card-img-top" alt="...">
                  <div class="card-body text-center">
                    <h3>Hi, how are you doing today?</h3>
                    <p>I'm doing well, thank you for asking. How can I assist you today?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  return div;
}
