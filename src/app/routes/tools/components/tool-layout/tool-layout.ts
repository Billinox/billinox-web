import { Component } from '@angular/core';
import { Navbar } from "@billinox/src/app/components/site/navbar/navbar";
import { Footer } from "@billinox/src/app/components/site/footer/footer";

@Component({
  selector: 'app-tool-layout',
  imports: [Navbar, Footer],
  templateUrl: './tool-layout.html',
  styleUrl: './tool-layout.css',
})
export class ToolLayout {

}
