import { Component, OnInit } from '@angular/core';

declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.bg-custom-1').hover(function () {
        $('.img-1').addClass('img-diseño');
        $('.caption-1').css('display', 'block');
        $('.child-1').css('display', 'none');
      }, function () {
        $('.img-1').removeClass('img-diseño');
        //$('.img-1').addClass('img-diseño-back');
        $('.caption-1').css('display', 'none');
        $('.child-1').css('display', 'block');
      });

      $('.bg-custom-2').hover(function () {
        $('.img-2').addClass('img-diseño');
        $('.caption-2').css('display', 'block');
        $('.child-2').css('display', 'none');
      }, function () {
        $('.img-2').removeClass('img-diseño');
        $('.caption-2').css('display', 'none');
        $('.child-2').css('display', 'block');
      });

      $('.bg-custom-3').hover(function () {
        $('.img-3').addClass('img-diseño');
        $('.caption-3').css('display', 'block');
        $('.child-3').css('display', 'none');
      }, function () {
        $('.img-3').removeClass('img-diseño');
        $('.caption-3').css('display', 'none');
        $('.child-3').css('display', 'block');
      });

      $('.bg-custom-4').hover(function () {
        $('.img-4').addClass('img-diseño');
        $('.caption-4').css('display', 'block');
        $('.child-4').css('display', 'none');
      }, function () {
        $('.img-4').removeClass('img-diseño');
        $('.caption-4').css('display', 'none');
        $('.child-4').css('display', 'block');
      });

      $('.bg-custom-5').hover(function () {
        $('.img-5').addClass('img-diseño');
        $('.caption-5').css('display', 'block');
        $('.child-5').css('display', 'none');
      }, function () {
        $('.img-5').removeClass('img-diseño');
        $('.caption-5').css('display', 'none');
        $('.child-5').css('display', 'block');
      });

      $('.bg-custom-6').hover(function () {
        $('.img-6').addClass('img-diseño');
        $('.caption-6').css('display', 'block');
        $('.child-6').css('display', 'none');
      }, function () {
        $('.img-6').removeClass('img-diseño');
        $('.caption-6').css('display', 'none');
        $('.child-6').css('display', 'block');
      });

    });



  }
/*
  public mostrar(){
    $(document).ready(function () {
      $(".bg-custom-1").hover(function () {
        $(this).css("background-color", "red");
      }, function () {
        $(this).css("background-color", "pink");
      });
    });
  }*/
  public mostrar() {
    
  }

}
