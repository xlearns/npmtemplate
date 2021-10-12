<template>
	<button
		class="wx-button"
		:disabled="disabled || loading"
		:class="[
			size ? `wx-button-${size}` : '',
			type ? `wx-button-${type}` : '',
			{ 'is-loading': loading },
			{ 'is-circle': circle },
			{ 'is-disabled': disabled },
			{ 'is-round': round },
			{ 'is-plain': plain },
		]"
		@click="handleClick"
	>
		<i v-if="loading" class="iconfont icon-loading wx-icon-loading"></i>
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { debounce } from "throttle-debounce";
export default defineComponent({
	name: "wxButton",
	props: {
		size: {
			type: String,
			default: "medium",
			validator(val: string): boolean {
				return ["medium", "small", "mini", ""].includes(val);
			},
		},
		type: {
			type: String,
			default: "primary",
			validator(val: string): boolean {
				return ["primary", "success", "warning", "danger"].includes(val);
			},
		},
		disabled: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
		loading: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
		circle: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
		round: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
		plain: {
			type: Boolean,
			default: () => {
				return false;
			},
		},
	},
	emits: ["click"],
	setup(props, { emit }) {
		const throttleClick = debounce(200, false, (event: Event) => {
			emit("click", event);
		});
		const methods = {
			handleClick(e: Event) {
				throttleClick(e);
			},
		};
		return {
			...methods,
		};
	},
});
</script>

<style lang="scss" scoped>
.wx-button {
	line-height: 1;
	white-space: nowrap;
	cursor: pointer;
	-webkit-appearance: none;
	text-align: center;
	box-sizing: border-box;
	outline: 0;
	margin: 10px;
	transition: 0.1s;
	font-weight: 500;
	// padding: 12px 20px;
	// font-size: 14px;
	border-radius: 4px;
	// display: flex;
	align-items: center;
	//禁止元素的文字被选中
	-moz-user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
}
.wx-button-danger.is-plain {
	color: #f56c6c;
	background-color: #fef0f0;
	border-color: #fbc4c4;
}
.wx-button-primary.is-plain {
	background-color: #ecf5ff;
	border-color: #b3d8ff;
	color: #409eff;
}
.wx-button-warning.is-plain {
	color: #e6a23c;
	background-color: #fdf6ec;
	border-color: #f5dab1;
}
.wx-button-success.is-plain {
	color: #67c23a;
	background-color: #f0f9eb;
	border-color: #c2e7b0;
}

.wx-button {
	background: #fff;
	border: 1px solid #dcdfe6;
	color: #606266;
}
.wx-button-primary {
	color: #fff;
	background-color: #409eff;
	border-color: #409eff;
	&:hover {
		background: #66b1ff;
		border-color: #66b1ff;
		color: #fff;
		box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
			0 2px 4px 0 rgb(232 237 250 / 50%);
	}
	&:active {
		background: #3a8ee6;
		border-color: #3a8ee6;
		color: #fff;
	}
}
.wx-button-success {
	color: #fff;
	background-color: #67c23a;
	border-color: #67c23a;
	&:hover {
		background: #85ce61;
		border-color: #85ce61;
		color: #fff;
		box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
			0 2px 4px 0 rgb(232 237 250 / 50%);
	}
	&:active {
		background: #5daf34;
		border-color: #5daf34;
		color: #fff;
	}
}
.wx-button-warning {
	color: #fff;
	background-color: #e6a23c;
	border-color: #e6a23c;
	&:hover {
		background: #ebb563;
		border-color: #ebb563;
		color: #fff;
	}
	&:active {
		background: #cf9236;
		border-color: #cf9236;
		color: #fff;
	}
}
.wx-button-danger {
	color: #fff;
	background-color: #f56c6c;
	border-color: #f56c6c;
	&:hover {
		background: #f78989;
		border-color: #f78989;
		color: #fff;
	}
	&:active {
		background: #dd6161;
		border-color: #dd6161;
		color: #fff;
	}
}

.is-loading {
	position: relative;
	pointer-events: none;
}

.wx-button.is-loading:before {
	pointer-events: none;
	content: "";
	position: absolute;
	left: -1px;
	top: -1px;
	right: -1px;
	bottom: -1px;
	border-radius: inherit;
	background-color: hsla(0, 0%, 100%, 0.35);
}

.wx-button-medium {
	padding: 10px 20px;
	font-size: 14px;
	border-radius: 4px;
}
.wx-button-small {
	padding: 9px 15px;
	font-size: 12px;
	border-radius: 3px;
}
.wx-button-mini {
	padding: 4px 10px;
	font-size: 12px;
	border-radius: 3px;
}
.is-round {
	border-radius: 20px;
	padding: 12px 23px;
}

.is-disabled {
	color: #c0c4cc;
	cursor: not-allowed;
	background-image: none;
	background-color: #fff;
	border-color: #ebeef5;
	&:hover,
	&:focus {
		color: #c0c4cc;
		cursor: not-allowed;
		background-image: none;
		background-color: #fff;
		border-color: #ebeef5;
	}
}

.wx-button-danger.is-disabled {
	color: #fff;
	background-color: #fab6b6;
	border-color: #fab6b6;
}
.wx-button-primary.is-disabled {
	color: #fff;
	background-color: #a0cfff;
	border-color: #a0cfff;
}
.wx-button-warning.is-disabled {
	color: #fff;
	background-color: #f3d19e;
	border-color: #f3d19e;
}
.wx-button-success.is-disabled {
	color: #fff;
	background-color: #b3e19d;
	border-color: #b3e19d;
}
.wx-icon-loading {
	display: inline-block;
	animation: rotating 2s linear infinite;
}
@keyframes rotating {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.is-circle {
	border-radius: 50%;
	padding: 12px;
}
</style>
