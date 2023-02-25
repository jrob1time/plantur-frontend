const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/plants`;

async function index(): Promise<any> {
  const res = await fetch(BASE_URL);
  return res.json();
}

async function create(formData: any): Promise<any> {
  const res: Response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return res.json();
}

async function update(formData: any): Promise<any> {
  const res: Response = await fetch(BASE_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return res.json();
}


export {
  index,
  create,
  update
}
