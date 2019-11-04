package com.hanrabong.web.config;

import javax.sql.DataSource;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;


@Configuration
@ComponentScan(basePackages = {"com.hanrabong.web"})
@MapperScan(basePackages = {"com.hanrabong.web"})
//@EnableAspectJAutoProxy
//@EnableTransactionManagement
public class RootConfig {
	
	@Bean
	public DataSource dataSource() {
		/*HikariConfig hikariConfig = new HikariConfig();
		hikariConfig.setDriverClassName("com.mysql.jdbc.Driver");
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/hanrabong");
		hikariConfig.setUsername("hanrabong");
		hikariConfig.setPassword("hanrabong");*/
		DriverManagerDataSource dataSource = new DriverManagerDataSource();

	    dataSource.setDriverClassName("com.mysql.jdbc.Driver");
	    dataSource.setUrl("jdbc:mysql://localhost:3306/hanrabong?serverTimezone=UTC");
	    dataSource.setUsername("hanrabong");
	    dataSource.setPassword("hanrabong");
		
		return dataSource;}
		
	@Bean
	public DataSourceTransactionManager txManager() {
		return new DataSourceTransactionManager(dataSource());
	}
}
 