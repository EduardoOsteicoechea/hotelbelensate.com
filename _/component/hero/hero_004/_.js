// Called from "./_.php"

// import change_image_on_lateral_control_click from "./change_image_on_lateral_control_click.js";

export default class{
    constructor
	(
        root_folder,
        sesion_array,
        page_name,
        component_id,
        component_class,
        images_folder,
        data_file_folder_path,
        data,
	) 
	{
        this.root_folder = root_folder;
        this.sesion_array = sesion_array;
        this.page_name = page_name;
        this.component_id = component_id;
        this.component_class = component_class;
        this.images_folder = images_folder;
        this.data_file_folder_path = data_file_folder_path;
        this.data = data;

        // this.information_container_image_viewer_controls_container = document.getElementById(information_container_image_viewer_controls_container);
        

    };
}