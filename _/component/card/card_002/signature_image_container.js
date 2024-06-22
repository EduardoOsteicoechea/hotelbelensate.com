// Called from "./class.js"

export default function (
    root_folder, 
    component_folder,
    sesion_array,
    page_name,
    component_id,
    component_class,
    component_image_folder_path,
    component_container,
    images_names_array,
) 
{
  async function fetchDataAndPopulateContainer() {
      
    const dataToSend = {
      root_folder,
      component_folder,
      sesion_array,
      page_name,
      component_id,
      component_class,
      component_image_folder_path,
      component_container,
      images_names_array,
    };

    const response = await fetch(component_folder + "signature_image_container.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(dataToSend),
    });

    const data = await response.text();
    
    return data
  };
  
  return fetchDataAndPopulateContainer();
}