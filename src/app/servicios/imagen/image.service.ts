import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  public async uploadImage(image: File, type: string, id: number) {
    const formData = new FormData()

    formData.append(`image`, image)

    return axios.post(`http://167.99.46.205/index.php/api/upload-image?type=${type}&id=${id}`, formData)
/*    return axios.post(`http://localhost/apimages/api/upload-image?type=${type}&id=${id}`, formData)*/
  }
}
