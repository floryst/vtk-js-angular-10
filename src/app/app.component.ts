import { ViewChild, ElementRef, Component } from '@angular/core';

import vtkFullScreenRenderWindow from 'vtk.js/Sources/Rendering/Misc/FullScreenRenderWindow';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  @ViewChild('content', {read: ElementRef}) content: ElementRef;

  fullscreenRenderWindow = null;

  ngAfterViewInit(): void {
    this.fullscreenRenderWindow = vtkFullScreenRenderWindow.newInstance();
    const cone = vtkConeSource.newInstance();
    const actor = vtkActor.newInstance();
    const mapper = vtkMapper.newInstance();

    actor.setMapper(mapper);
    mapper.setInputConnection(cone.getOutputPort());

    const renderer = this.fullscreenRenderWindow.getRenderer();
    renderer.addActor(actor);
    renderer.resetCamera();

    const renderWindow = this.fullscreenRenderWindow.getRenderWindow();
    renderWindow.render();
  }
}
