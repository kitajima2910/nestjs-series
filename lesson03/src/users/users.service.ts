import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
	private users = [
		{
			id: 1,
			name: 'Phạm Xuân Hoài',
			email: 'kitajima2910@gmail.com',
			role: 'ADMIN',
		},
		{
			id: 2,
			name: 'Nguyễn Thị Mai Anh',
			email: 'maianh.nguyen@example.com',
			role: 'INTERN',
		},
		{
			id: 3,
			name: 'Lê Văn Đức',
			email: 'duc.le@example.com',
			role: 'ENGINEER',
		},
		{
			id: 4,
			name: 'Trần Minh Tuấn',
			email: 'tuankun2310@gmail.com',
			role: 'ADMIN',
		},
		{
			id: 5,
			name: 'Hoàng Thu Trang',
			email: 'tranghoang@example.com',
			role: 'INTERN',
		},
		{
			id: 6,
			name: 'Đặng Quang Huy',
			email: 'quanghuy.dang@example.com',
			role: 'ENGINEER',
		},
		{
			id: 7,
			name: 'Vũ Ngọc Hà',
			email: 'ngocha.vu@example.com',
			role: 'ADMIN',
		},
		{
			id: 8,
			name: 'Bùi Văn Nam',
			email: 'nam.bui@example.com',
			role: 'INTERN',
		},
		{
			id: 9,
			name: 'Phan Thị Hồng Nhung',
			email: 'hongnhung.phan@example.com',
			role: 'ENGINEER',
		},
		{
			id: 10,
			name: 'Ngô Đình Bảo',
			email: 'bao.ngo@example.com',
			role: 'ADMIN',
		},
	];

	findAll(role?: "ADMIN" | "ENGINEER" | "INTERN") {
		if (role) {
			return this.users.filter((user) => user.role === role);
		}
		return this.users;
	}

	findOne(id: number) {
		const user = this.users.find((user) => user.id === id);
		return user;
	}

	create(user: { name: string; email: string; role: "ADMIN" | "ENGINEER" | "INTERN" }) {
	
		const usersByHighestId = this.users.sort((a, b) => b.id - a.id);
		const newUser = {
			id: usersByHighestId[0].id + 1,
			...user
		};
		this.users.push(newUser);
		return newUser;
	}

	update(id: number, updateUser: { name?: string; email?: string; role?: "ADMIN" | "ENGINEER" | "INTERN" }) {
		this.users = this.users.map((user) => {
			if (user.id === id) {
				return {
					...user,
					...updateUser
				}
			}
			return user;
		})

		this.findOne(id);
	}

	remove(id: number) {
	
		const removedUser = this.findOne(id);
		this.users = this.users.filter((user) => user.id !== id);
		return removedUser;

	}
}
