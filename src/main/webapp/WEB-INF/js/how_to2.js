$(document).ready(function(){window.slideshow_onslide=function(src,index,self){var all_slide=$("#"+self.setting.togglerid+' .slideButton'),select_current_index=$(all_slide[index]);all_slide.removeClass("activeSlide").addClass('defaultSlide');select_current_index.addClass("activeSlide").removeClass('defaultSlide');};var clicked={select_device_button:function(current_target){var device_type=current_target.attr('data-select'),current_device_html=$(".content."+device_type),select_device_btn=current_target.parent(".select-device");select_device_btn.find("button").removeClass("selected");current_target.addClass("selected");$(".content").addClass("hide");current_device_html.removeClass("hide");}};$(".select-device button").click(function(e){var current_target=$(e.currentTarget);if(current_target.hasClass("selected")){return;}
clicked.select_device_button(current_target);});});