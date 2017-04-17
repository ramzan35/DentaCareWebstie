import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AngularFire} from 'angularfire2';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  listing: any;
  imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute,
    public af: AngularFire
  ) { 
    this.af.auth.subscribe(auth => {
     //Here you get the user information
    //  console.log("My auth : "+auth.uid);
    })
  }

  ngOnInit() {
    // Get ID
    this.id = "-Kdl_wRRkn7nJxgz4B54"//this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
      console.log(listing);

      // @TODO - Storage Ref
    });

    // console.log(firebase.auth().currentUser.uid);

  }

}
