/**** Settings page tabs *****/
jQuery( document ).on( 'click', '.sps_content .nav-tab-wrapper .nav-tab', function( e ) {
	var tab = jQuery( this ).attr( 'data-tab' );
	if ( ! tab ) { return; }
	e.preventDefault();
	jQuery( '.sps_content .nav-tab-wrapper .nav-tab' ).removeClass( 'nav-tab-active' );
	jQuery( this ).addClass( 'nav-tab-active' );
	jQuery( '.sps_content .sps-tab-panel' ).hide();
	jQuery( '.sps_content #' + tab ).show();
	if ( window.history && window.history.replaceState ) {
		window.history.replaceState( null, null, '#' + tab );
	}
} );
jQuery( function() {
	var hash = window.location.hash.replace( '#', '' );
	if ( hash && jQuery( '.sps_content #' + hash ).length ) {
		jQuery( '.sps_content .nav-tab-wrapper .nav-tab' ).removeClass( 'nav-tab-active' );
		jQuery( '.sps_content .nav-tab[data-tab="' + hash + '"]' ).addClass( 'nav-tab-active' );
		jQuery( '.sps_content .sps-tab-panel' ).hide();
		jQuery( '.sps_content #' + hash ).show();
	}
} );

/**** Dismissible admin notices (settings success message) *****/
jQuery( document ).on( 'click', '.notice.is-dismissible .notice-dismiss', function() {
	jQuery( this ).closest( '.notice' ).fadeTo( 100, 0, function() {
		jQuery( this ).slideUp( 100, function() {
			jQuery( this ).remove();
		} );
	} );
} );

/**** Add more website *****/
jQuery(".add_more_site").on("click",function(){
	var pre_squ = jQuery("#auto_increment").val();
	var squ = parseInt(pre_squ) + parseInt(1);
	jQuery("#auto_increment").val(squ);
	var $clone_html = jQuery("#sps_setting_table").html();
	var $clone_html_new = $clone_html.replace(/{sps_no}/g, squ);
	jQuery(".setting-general").append($clone_html_new);
});


jQuery(document).on("click", ".remove_site", function() {
	var remove_id = jQuery(this).attr("data-site_id");
	jQuery(".remove_site_"+remove_id).remove();
});


/***** hide and show password *****/
jQuery(document).on("click", ".sps_show_pass", function() {
	let container = jQuery(this).parents(".sps_password_box");
	container.find("input").attr("type", "text");
	jQuery(this).hide();
	jQuery(this).next().show();
});

jQuery(document).on("click", ".sps_hide_pass", function() {
	let container = jQuery(this).parents(".sps_password_box");
	container.find("input").attr("type", "password");
	jQuery(this).hide();
	jQuery(this).prev().show();
});


/***** add website url below username and password field *****/
jQuery(document).on("keyup", ".sps_url", function() {
	let url = jQuery(this).val();
	let table = jQuery(this).parents("table.sps-setting-form");
	table.find("span.sps_username").text(url);
	table.find("span.sps_password").text(url);
});
