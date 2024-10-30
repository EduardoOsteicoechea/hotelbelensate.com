// called from at rendering time from "../../../../carga_de_imagenes/index.php" => but parameterized at development time from "./class.php"

import create_image_box from "./image_box.js";
export default class
{
	constructor
	(
		root_folder, 
		component_folder, 
		sesion_array,
		page_name,
		component_id,
		component_class,
		container
	)
	{
		// The form encripts the images in very easily apache's php server manageable manner. Our server will be an apache's php(8.2) server
		// The upload button will only be active after selecting both the 3840x2160 image and the 1080x1920 images, and after filling each image name in the name input successfully.
		// when each image name input triggers the "onchange" event, the algorith will compare the name provided with the existing names, and will ensure that the names aren't repeated. Only if this requirement it met, the upload button will be enabled.
		// "Onpointerup" of the upload button, the server must validate the image, and check if it actually has the required size, extension, and doesn't exeeds the maximum size permited.
		// If the image not compliant, add the error message to the "result_message" elements, and make it visible.
		// If the image is compliant, add the success message to the "result_message" elements, make it visible, and update the "image_box" component.


		const component_structure = {
			"component_container":{
				"result_message":["title","explanation",]
				,
				"form":
				{
					"load_screen":{},
					"message":["title","explanation"],
					"image_upload_controls_for_3840x2160":["label","input",],
					"image_upload_controls_for_1080x1920":["label","input",],
					"upload_button":"guardar",
					"confirm_accion_dialog":{
						"overlay":{},
						"dialog_container":{
							"close_button":"cerrar",
							"dialog_message":["title","explanation",],
							"buttons_container":["accept","cancel",],
						},
					},
				}
				,
				"image_box":
				{
					"load_screen":{},
					"image_element_1":{
						"expand_button":["icon"],
						"delete_button":["icon"],
						"toggle_status_button":["icon"],
						"set_as_default_button":["icon"],
						"images_container":{
							"image_3840x2160_container":["image"],
							"image_1080x1920_container":["image"],
						},
						"confirm_accion_dialog":{
							"overlay":{},
							"dialog_container":{
								"close_button":"cerrar",
								"dialog_message":["title","explanation",],
								"buttons_container":["accept","cancel",],
							},
						},
					}
				}
				,
				"image_viewer":
				{
					"overlay":{},
					"images_container":{
						"close_button":"cerrar",
						"image_container_3840x2160":{
							"image_name":"",
							"image_container":["image"]
						},
						"image_container_1080x1920":{
							"image_name":"",
							"image_container":["image"]
						},
					}
				}
			}
		};

		const component_container = document.getElementById(component_id + "_" + component_class);
		add_component_style_tag(
			root_folder + "_/component/image_loader/image_loader_002/",
			"component_container"
		);

		// The "image_box" must be the entering component of the container elements, because it will be the component's state manager. This means that this "image_box" will pass it's data all the time to the rest of the components updating them automatically.

		// It's also important to undertand that when this elment is reloaded at submit time, the rest of the components will be uploaded.

		// The upload action, if successfully processed in the server, must re-render this component on it's "component_container", which will update each element of the component instance, and prevent the reloading of other instances in the document. This will also have the benefit of isolating the component instance variables and validations to the current instance scope.

		// The layout of the component must be controlled by a "display:grid" property. This will allow us to place each element in the correct position. This is necessary because the "image_box" is the vissually last positioned element of the component. But in a data concerned perspective, must be the first so that it can provide image names to the form for validations, and along with the form, pass image data to the "result_message" element.

		component_container.appendChild(
			create_image_box(
				root_folder, 
				component_folder,
				sesion_array,
				page_name,
				component_id,
				component_class,
				component_container
			)
		);
	}
}