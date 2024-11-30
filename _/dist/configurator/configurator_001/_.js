// called from "./_.php";
import access_manager from "./authentication/_access_manager.js";
export default class {
    constructor(root_folder, page_name, component_id, component_class_name, outer_container_id) {
        const outer_container = document.getElementById(outer_container_id);
        if (outer_container !== null) {
            const validated_outer_container = outer_container;
            const access_manager_manager_instance = new access_manager(root_folder, page_name, component_id, component_class_name, validated_outer_container);
            access_manager_manager_instance.validate_session_or_generate_login_dashboard();
        }
        else {
            alert(`The outer container of the ${component_id} wasn't passed to the main javascript class correctly.`);
        }
        ;
    }
}
//# sourceMappingURL=_.js.map