/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.utilaider.logistics.service;

import com.utilaider.logistics.domain.Driver;

/**
 *
 * @author SARJIT
 */
public interface DriverService extends GenericService<Long, Driver> {

    public Driver getDriverByMobileNo(String mobileNumber) throws Exception;
}
