import Navbar from '../Component/Nav';
import Footer from '../Component/Footer';

export default function Admin() {
    return (
        <>
            < Navbar />

            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="position-sticky">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">
                                        <i class="bi bi-house me-2"></i><span className="me-1">หน้าหลัก</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                        <i class="bi bi-plus-circle me-2"></i><span className="ml-2">เพิ่มห้องพัก</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                        <i class="bi bi-pencil-square me-2"></i><span className="ml-2">แก้ไขห้องพัก</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                        <i class="bi bi-trash3 me-2"></i><span className="ml-2">ลบห้องพัก</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span className="ml-2">Reports</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <span className="ml-2">Integrations</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <main className="col-md-9 col-lg-10 px-md-1 py-5 bg-primary justify-content-end">
                            <h1 className="h2">Dashboard</h1>
                            <p>This is the homepage of a simple admin interface which is part of a tutorial written on Themesberg</p>
                            <div className="row my-4">
                                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                    <div className="card">
                                        <h5 className="card-header">Customers</h5>
                                        <div className="card-body">
                                            <h5 className="card-title">345k</h5>
                                            <p className="card-text">Feb 1 - Apr 1, United States</p>
                                            <p className="card-text text-success">18.2% increase since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                    <div className="card">
                                        <h5 className="card-header">Revenue</h5>
                                        <div className="card-body">
                                            <h5 className="card-title">$2.4k</h5>
                                            <p className="card-text">Feb 1 - Apr 1, United States</p>
                                            <p className="card-text text-success">4.6% increase since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                    <div className="card">
                                        <h5 className="card-header">Purchases</h5>
                                        <div className="card-body">
                                            <h5 className="card-title">43</h5>
                                            <p className="card-text">Feb 1 - Apr 1, United States</p>
                                            <p className="card-text text-danger">2.6% decrease since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                                    <div className="card">
                                        <h5 className="card-header">Traffic</h5>
                                        <div className="card-body">
                                            <h5 className="card-title">64k</h5>
                                            <p className="card-text">Feb 1 - Apr 1, United States</p>
                                            <p className="card-text text-success">2.5% increase since last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-xl-8 mb-4 mb-lg-0">
                                    <div className="card">
                                        <h5 className="card-header">Latest transactions</h5>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Order</th>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Customer</th>
                                                            <th scope="col">Total</th>
                                                            <th scope="col">Date</th>
                                                            <th scope="col" />
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">17371705</th>
                                                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                                                            <td>johndoe@gmail.com</td>
                                                            <td>€61.11</td>
                                                            <td>Aug 31 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">17370540</th>
                                                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                                                            <td>jacob.monroe@company.com</td>
                                                            <td>$153.11</td>
                                                            <td>Aug 28 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">17371705</th>
                                                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                                                            <td>johndoe@gmail.com</td>
                                                            <td>€61.11</td>
                                                            <td>Aug 31 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">17370540</th>
                                                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                                                            <td>jacob.monroe@company.com</td>
                                                            <td>$153.11</td>
                                                            <td>Aug 28 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">17371705</th>
                                                            <td>Volt Premium Bootstrap 5 Dashboard</td>
                                                            <td>johndoe@gmail.com</td>
                                                            <td>€61.11</td>
                                                            <td>Aug 31 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">17370540</th>
                                                            <td>Pixel Pro Premium Bootstrap UI Kit</td>
                                                            <td>jacob.monroe@company.com</td>
                                                            <td>$153.11</td>
                                                            <td>Aug 28 2020</td>
                                                            <td><a href="#" className="btn btn-sm btn-primary">View</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="#" className="btn btn-block btn-light">View all</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-4">
                                    <div className="card">
                                        <h5 className="card-header">Traffic last 6 months</h5>
                                        <div className="card-body">
                                            <div id="traffic-chart" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>


            < Footer />
        </>
    );
}